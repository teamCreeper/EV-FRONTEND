import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Carnews() {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [hoverState, setHoverState] = useState({}); // hover 상태를 관리하는 객체

  // 컴포넌트가 처음 렌더링될 때 뉴스를 가져오는 함수
  useEffect(() => {
    // 초기 화면 로드 시 전기차 관련 뉴스 데이터 가져오기
    fetchNews('전기차');

    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };
    // ESC 키 리스너 등록
    document.addEventListener('keydown', handleEscKey);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  const fetchNews = async (query) => {
    try {
      const response = await axios.get('https://newsapi.org/v2/everything', {
        params: {
          q: query, // 검색어
          apiKey: process.env.REACT_APP_NEWS_API_KEY, // News API에서 발급받은 API 키를 입력하세요
          language: 'ko', // 한국어 기사만 가져오도록 설정
          sortBy: 'publishedAt', // 최신 뉴스 기준으로 정렬
        },
      });
      setNews(response.data.articles);
    } catch (error) {
      console.error('뉴스를 가져오는 중 오류 발생:', error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    fetchNews(searchTerm); // 검색어에 맞는 기사를 가져옴
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchSubmit(); // Enter 키를 누르면 검색 실행
    }
  };

  const handleShowModal = (article) => {
    setSelectedArticle(article);
    setModalVisible(true); // 모달을 띄운다
  };

  const handleCloseModal = () => {
    setModalVisible(false); // 모달을 닫는다
    setSelectedArticle(null); // 선택된 기사 초기화
  };

  const handleMouseEnter = (type, index) => {
    setHoverState((prevState) => ({
      ...prevState,
      [`${type}-${index}`]: true, // 특정 인덱스에 대한 hover 상태 설정
    }));
  };

  const handleMouseLeave = (type, index) => {
    setHoverState((prevState) => ({
      ...prevState,
      [`${type}-${index}`]: false, // 특정 인덱스에 대한 hover 상태 초기화
    }));
  };

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.title}>전기차 관련뉴스</div>
        <div style={styles.searchBarContainer}>
          <input
            type="text"
            placeholder="전기차 관련 뉴스 검색어 입력"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyPress} // Enter 키 입력 감지
            style={styles.searchInput}
          />
          <button onClick={handleSearchSubmit} style={styles.searchButton}>
            검색
          </button>
        </div>
      </div>

      <div style={styles.newsContainer}>
        {news.map((article, index) => (
          <div key={index} style={styles.newsCard}>
            <img
              src={article.urlToImage}
              alt="News"
              style={styles.newsImage}
              onClick={(e) => {
                e.stopPropagation(); // 클릭 이벤트가 부모 요소로 전파되는 것을 막음
                handleShowModal(article); // 이미지 클릭 시 모달 띄우기
              }}
            />
            <div style={styles.newsContent}>
              <h3
                style={{
                  ...styles.newsTitle,
                  ...(hoverState[`title-${index}`] && styles.newsTitleHover),
                }}
                onMouseEnter={() => handleMouseEnter('title', index)}
                onMouseLeave={() => handleMouseLeave('title', index)}
                onClick={(e) => {
                  e.stopPropagation(); // 클릭 이벤트가 부모 요소로 전파되는 것을 막음
                  handleShowModal(article); // 타이틀 클릭 시 모달 띄우기
                }}>
                {article.title}
              </h3>
              <p
                style={{
                  ...styles.newsDescription,
                  ...(hoverState[`description-${index}`] && styles.newsDescriptionHover),
                }}
                onMouseEnter={() => handleMouseEnter('description', index)}
                onMouseLeave={() => handleMouseLeave('description', index)}
                onClick={(e) => {
                  e.stopPropagation(); // 클릭 이벤트가 부모 요소로 전파되는 것을 막음
                  handleShowModal(article); // 내용 클릭 시 모달 띄우기
                }}>
                {article.description}
              </p>
              <p style={styles.newsDate}>{new Date(article.publishedAt).toLocaleDateString()}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // 클릭 이벤트가 부모 요소로 전파되는 것을 막음
                  handleShowModal(article); // '더보기' 버튼 클릭 시 모달 띄우기
                }}
                style={styles.readMore}>
                더보기
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalVisible && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <div style={styles.modalHeader}>
              <button onClick={handleCloseModal} style={styles.closeButton}>
                X
              </button>
            </div>
            <iframe src={selectedArticle?.url} width="100%" height="600px" style={{ ...styles.iframe, border: 'none' }} title="News Article" />
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    marginTop: '50px',
    marginLeft: '80px',
    marginRight: '80px',
    backgroundColor: 'rgb(80,80,80)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
  },
  title: {
    marginTop: '10px',
    fontSize: '60px',
    marginLeft: '40px',
    fontWeight: 400,
    fontFamily: 'JalnanGothic',
    color: 'white',
  },
  searchBarContainer: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '40px',
    gap: '10px',
  },
  searchInput: {
    paddingLeft: '10px',
    width: '400px',
    height: '30px',
    border: '1px solid white',
    backgroundColor: '#373737',
    color: 'white',
  },
  searchButton: {
    height: '31px',
    padding: '0 20px',
    backgroundColor: '#D9D9D9',
    color: 'black',
    fontWeight: 'bold',
    border: '1px solid white',
    cursor: 'pointer',
  },
  newsContainer: {
    margin: '20px 80px',
  },
  newsCard: {
    display: 'flex',
    marginBottom: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  newsImage: {
    width: '200px',
    height: '120px',
    objectFit: 'cover',
    marginRight: '20px',
    cursor: 'pointer',
  },
  newsContent: {
    flex: 1,
  },
  newsTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  newsTitleHover: {
    textDecoration: 'underline', // 마우스 오버 시 밑줄
  },
  newsDescription: {
    fontSize: '14px',
    color: '#555',
    cursor: 'pointer',
  },
  newsDescriptionHover: {
    textDecoration: 'underline', // 마우스 오버 시 밑줄
  },
  newsDate: {
    fontSize: '12px',
    color: '#888',
  },
  readMore: {
    backgroundColor: 'white',
    border: '1px solid white',
    fontSize: '14px',
    color: 'black',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  // 모달 스타일 추가
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'column', // 자식 요소를 세로로 정렬
    backgroundColor: 'white',
    width: '80%',
    height: '80%',
    borderRadius: '8px',
    position: 'relative',
    zIndex: 2,
  },

  modalHeader: {
    display: 'flex', // 닫기 버튼을 위한 flexbox
    justifyContent: 'flex-end', // 닫기 버튼을 오른쪽으로 정렬
    padding: '10px', // 상단 여백 추가
    backgroundColor: 'rgba(0,0,0,0)', // (선택 사항) 헤더 영역 배경색
    borderBottom: '1px solid #ccc', // (선택 사항) 헤더 하단 경계선
  },

  closeButton: {
    backgroundColor: 'rgb(80,80,80)',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '15px',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    width: '40px',
    height: '40px',
  },

  iframe: {
    width: '100%',
    height: '100%',
  },
};

export default Carnews;
