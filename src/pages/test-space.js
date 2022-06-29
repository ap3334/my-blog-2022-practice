import { Link } from "gatsby";
import React from "react";

function TestSpacePage() {
    return (
        <main>
            <title>테스트 스페이스</title>

            <div style={{display: "flex", gap:10}}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/test">Test</Link>
                <Link to="/test-space">Test Space</Link>
            </div>
            
            <h1>테스트 스페이스 페이지입니다.</h1>
        </main>
    );
}

export default TestSpacePage;