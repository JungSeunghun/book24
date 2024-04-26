import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {CH2, CH5, H2_400} from "../../style/FontStyle";
import SizedBox from "../common/SizedBox";
import Book from "../../pages/Book";


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
`;

const MainContentImg = styled.img`
  object-fit: contain;
  width: 100%;
`;

interface Book {
  no: string;                 // 순번
  ranking: string;            // 순위
  bookname: string;           // 도서명
  authors: string;            // 저자명
  publisher: string;          // 출판사
  publication_year: string;   // 출판년도
  isbn13: string;             // 13 자리 ISBN
  addition_symbol: string;    // ISBN 부가기호
  vol: string;                // 권
  class_no: string;           // 주제분류
  class_nm: string;           // 주제분류명
  loan_count: string;         // 대출건수
  bookImageURL: string;       // 책표지 URL
  bookDtlUrl: string;         // 도서 상세 페이지 URL
}

interface ApiResponse {
  response: {
    request: {
      startDt: string;
      endDt: string;
      pageNo: number;
      pageSize: number;
    };
    resultNum: number;
    numFound: number;
    docs: {
      doc: Book[];
    }[];
  };
}

const MainBookGrid1: React.FC = () => {

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/library/recent');
        const json: ApiResponse = await response.json();
        const allBooks = json.response.docs.flatMap(doc => doc.doc);
        setBooks(allBooks);
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
            요즘 뜨는 추천 신간!
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
        {books.map((book) => (
          <MainContentImgContainer key={book.isbn13}>
            <MainContentImg src={book.bookImageURL} alt={`${book.bookname}`} />
          </MainContentImgContainer>
        ))}
      </MainContent>
    </MainContentContainer>
  );
};

export default MainBookGrid1;
