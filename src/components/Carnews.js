import React, { useEffect, useState } from "react";
import axios from "axios";

function Carnews() {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


   // 컴포넌트가 처음 렌더링될 때 뉴스를 가져오는 함수
   useEffect(() => {
        // 초기 화면 로드 시 전기차 관련 뉴스 데이터 가져오기
        fetchNews("전기차");
      }, []);

    const fetchNews = async (query) => {
      try {
        const response = await axios.get("https://newsapi.org/v2/everything", {
          params: {
            q: query, // 검색어
            apiKey: process.env.REACT_APP_NEWS_API_KEY, // News API에서 발급받은 API 키를 입력하세요
            language: "ko", // 한국어 기사만 가져오도록 설정
            sortBy: "publishedAt", // 최신 뉴스 기준으로 정렬
          },
        });
        setNews(response.data.articles);
      } catch (error) {
        console.error("뉴스를 가져오는 중 오류 발생:", error);
      }
    };

    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSearchSubmit = () => {
      fetchNews(searchTerm); // 검색어에 맞는 기사를 가져옴
    };

    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleSearchSubmit(); // Enter 키를 누르면 검색 실행
      }
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
            onKeyPress={handleKeyPress} // Enter 키 입력 감지
            style={styles.searchInput}
          />
          <button onClick={handleSearchSubmit} style={styles.searchButton}>검색</button>
        </div>
      </div>
      <div style={styles.newsContainer}>
        {news.map((article, index) => (
          <div key={index} style={styles.newsCard}>
          <img src={article.urlToImage} alt="News" style={styles.newsImage} />
          <div style={styles.newsContent}>
            <h3 style={styles.newsTitle}>{article.title}</h3>
            <p style={styles.newsDescription}>{article.description}</p>
            <p style={styles.newsDate}>{new Date(article.publishedAt).toLocaleDateString()}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" style={styles.readMore}>
              더보기
            </a>
            </div>
          </div>
        ))}
      </div>
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
  },
  newsContent: {
    flex: 1,
  },
  newsTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  newsDescription: {
    fontSize: '14px',
    color: '#555',
  },
  newsDate: {
    fontSize: '12px',
    color: '#888',
  },
  readMore: {
    fontSize: '14px',
    color: 'black',
    textDecoration: 'underline',
  },
};
  export default Carnews;
 