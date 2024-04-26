import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {B1_600, CH2, CH5, H2_400} from "../../style/FontStyle";
import SizedBox from "../common/SizedBox";


const MainContentContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const MainContentHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainContentTitleContainer = styled.div`
  border-radius: 1.25rem;
  padding: 0.44rem 1rem;
  margin: 0 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.black};
  
`;

const MainContentTitleText = styled(H2_400)`
  color: ${({ theme }) => theme.colors.white};
`;

const MainContentLink = styled.a`
  cursor: pointer;
  margin: 0 2rem;
`;

const MainContentLinkText = styled(H2_400)``;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 3.75rem 2.5rem;
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MainContentImgContainer = styled.div`
  width: 14.625rem;
  height: 20rem;
  position: relative;
`;

const MainContentImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
`;

const RankCircle = styled.div`
  position: absolute;
  top: -1.5rem;
  left: -1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const RankCircleNumber = styled(B1_600)`
  color: ${({ theme }) => theme.colors.white};
`;

interface Book {
  no: string;                 // 순번
  difference: string;         // 대출순위 상승폭
  baseWeekRank: string;       // 기준일 순위
  pastWeekRank: string;       // 전주 순위
  bookname: string;           // 도서명
  authors: string;            // 저자명
  publisher: string;          // 출판사
  publication_year: string;   // 출판년도
  isbn13: string;             // 13 자리 ISBN
  addition_symbol: string;    // ISBN 부가기호
  vol: string;                // 권
  class_no: string;           // 주제분류
  class_nm: string;           // 주제분류명
  bookImageURL: string;       // 책표지 URL
  bookDtlUrl: string;         // 도서 상세 페이지 URL
}

interface ApiResponse {
  response: {
    request: {
      searchDt: string;
    };
    results: {
      result: {
        date: string;
        docs: {
          doc: Book;
        }[]
      }
    }[];
  };
}

const MainBookGrid2: React.FC = () => {

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/library/trending');
        const json: ApiResponse = await response.json();

        if (json.response.results.length > 0 && json.response.results[0].result.docs.length > 0) {
          const latestBooks = json.response.results[0].result.docs.map(doc => doc.doc).slice(0, 4);
          setBooks(latestBooks);
        } else {
          console.error('No results found');
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <MainContentContainer>
      <MainContentHeaderContainer>
        <MainContentTitleContainer>
          <MainContentTitleText>
            이번 주 베스트 셀러
          </MainContentTitleText>
        </MainContentTitleContainer>
        <MainContentLink>
          {/*<MainContentLinkText>*/}
          {/*  전체보기*/}
          {/*</MainContentLinkText>*/}
        </MainContentLink>
      </MainContentHeaderContainer>
      <SizedBox height={"1.25rem"}/>
      <MainContent>
        {books.map((book, index) => (
          <MainContentImgContainer key={book.isbn13}>
            {index < 3 && (
              <RankCircle>
                <RankCircleNumber>{index + 1}</RankCircleNumber>
              </RankCircle>
            )}
            <MainContentImg src={book.bookImageURL} alt={`${book.bookname}`} />
          </MainContentImgContainer>
        ))}
      </MainContent>
    </MainContentContainer>
  );
};

export default MainBookGrid2;
