import './App.css';
import { useState, useEffect } from 'react';
import Header from './component/blog/header/Header';
import Footer from './component/blog/footer/Footer';
import Sidebar from './component/blog/sidebar/Sidebar';
import PostList from './component/blog/post/PostList';
import ScrollToTopButton from './component/blog/button/ScrollToTopButton';
import ThemeToggleButton from './component/blog/button/ThemeToggleButton';

function App() {

    /* mock state */
    const [post, setPost] = useState([
        { title: '남자 코트 추천', content: '이 코트는 정말 따뜻하고 스타일리시합니다.', likes: 5 },
        { title: '우리 동네 맛집!', content: '이 식당은 정말 맛있습니다. 다들 가보세요!', likes: 10 },
        { title: '요즘 대세는 뭐지?', content: '요즘 대세는 리액트인가요?', likes: 5 },
        { title: '겨울철 피부 관리법', content: '추운 날씨에 피부를 보호하는 방법을 알아봅시다.', likes: 12 },
        { title: '효율적인 공부 방법', content: '짧은 시간에 많은 것을 배우는 방법을 공유합니다.', likes: 25 },
        { title: '여행 준비 체크리스트', content: '여행 전에 꼭 챙겨야 할 것들을 정리해보았습니다.', likes: 8 },
        { title: '홈트레이닝 루틴', content: '집에서 쉽게 따라할 수 있는 운동 루틴을 소개합니다.', likes: 30 },
        { title: '맛있는 브런치 레시피', content: '주말 아침을 특별하게 만들어줄 브런치 레시피입니다.', likes: 15 },
        { title: '독서 습관 기르기', content: '매일 책을 읽는 습관을 기르는 방법을 알아봅시다.', likes: 5 },
        { title: '효과적인 시간 관리', content: '시간을 효율적으로 관리하는 팁을 공유합니다.', likes: 20 },
        { title: '건강한 식단 구성', content: '균형 잡힌 식단을 구성하는 방법을 알아봅시다.', likes: 18 },
        { title: '스트레스 해소 방법', content: '스트레스를 효과적으로 해소하는 방법을 소개합니다.', likes: 22 },
        { title: '자기 계발 도서 추천', content: '자기 계발에 도움이 되는 책들을 추천합니다.', likes: 10 },
        { title: '여름철 피부 관리', content: '여름철 피부를 보호하는 방법을 알아봅시다.', likes: 7 },
        { title: '효율적인 업무 처리', content: '업무를 효율적으로 처리하는 방법을 공유합니다.', likes: 28 },
        { title: '집 꾸미기 아이디어', content: '집을 예쁘게 꾸미는 아이디어를 소개합니다.', likes: 14 },
        { title: '여행지 추천', content: '가볼 만한 여행지를 추천합니다.', likes: 35 },
        { title: '취미 생활 즐기기', content: '다양한 취미 생활을 즐기는 방법을 알아봅시다.', likes: 9 },
        { title: '효과적인 다이어트', content: '효과적으로 다이어트하는 방법을 공유합니다.', likes: 40 },
        { title: '자기 계발 목표 설정', content: '자기 계발 목표를 설정하는 방법을 알아봅시다.', likes: 6 },
        { title: '겨울철 운동 방법', content: '추운 날씨에도 운동을 꾸준히 하는 방법을 소개합니다.', likes: 13 },
        { title: '효율적인 독서 방법', content: '효율적으로 책을 읽는 방법을 공유합니다.', likes: 11 },
        { title: '여름철 다이어트', content: '여름철 다이어트에 도움이 되는 팁을 알아봅시다.', likes: 27 },
        { title: '건강한 아침 식사', content: '건강한 아침 식사를 준비하는 방법을 소개합니다.', likes: 19 },
        { title: '효과적인 운동 루틴', content: '효과적인 운동 루틴을 공유합니다.', likes: 32 },
        { title: '여행 사진 잘 찍는 법', content: '여행 사진을 잘 찍는 방법을 알아봅시다.', likes: 21 },
        { title: '자기 계발 목표 달성', content: '자기 계발 목표를 달성하는 방법을 공유합니다.', likes: 4 },
        { title: '겨울철 건강 관리', content: '겨울철 건강을 관리하는 방법을 알아봅시다.', likes: 16 },
        { title: '효율적인 공부 계획', content: '효율적으로 공부 계획을 세우는 방법을 소개합니다.', likes: 23 },
        { title: '여름철 여행 준비', content: '여름철 여행을 준비하는 방법을 알아봅시다.', likes: 26 },
        { title: '건강한 간식 만들기', content: '건강한 간식을 만드는 방법을 공유합니다.', likes: 17 },
        { title: '효과적인 스트레칭', content: '효과적으로 스트레칭하는 방법을 소개합니다.', likes: 29 },
        { title: '여행 경비 절약 팁', content: '여행 경비를 절약하는 팁을 알아봅시다.', likes: 24 }
    ]);

    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    function increaseLikes(index) {
        const newPosts = [...post];
        newPosts[index].likes += 1;
        setPost(newPosts);
    }

    return (
        <>
            <Header className={showHeader ? '' : 'hidden'} />
            <div className="main-container">
                <div className="content-container">
                    <Sidebar className="sidebar" />
                    <div className="content">
                        <PostList posts={post} increaseLikes={increaseLikes} />
                        <div className="button-container">
                            <ThemeToggleButton toggleTheme={toggleTheme} theme={theme} />
                            <ScrollToTopButton />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;