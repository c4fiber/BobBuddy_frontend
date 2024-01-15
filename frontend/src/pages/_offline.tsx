import Head from "next/head";

/**
 * Offline Fallback
 * 오프라인인 경우, 캐시되지 않은 페이지로의 접근은
 * 모두 이 페이지로 리디렉션됩니다
 * @returns
 */
const Fallback = () => (
    <>
        <Head>
            <title>Offline Fallback</title>
        </Head>
        <h1>This is offline fallback page</h1>
        <h2>When offline, any page route will fallback to this page.</h2>
    </>
);

export default Fallback;
