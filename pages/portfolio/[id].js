import React from 'react';
import { useRouter } from 'next/router';
 
const PortfolioProject = () => {
    const router = useRouter();
    console.log(router.pathname); // Next.js가 갖는 컴포넌트 폴더 경로
    console.log(router.query);

    return (
        <div>
            <h1>the dynamic routing page</h1>
        </div>
    );
};

export default PortfolioProject;