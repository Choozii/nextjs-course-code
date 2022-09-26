import {useRouter} from 'next/router';

function Blogs(){
    const router = useRouter();
    console.log(router.query);
    return <div>
        <h1>hello</h1>
    </div>
}

export default Blogs;