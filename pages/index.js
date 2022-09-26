import Link from 'next/link';


function HomePage() {
  const portfolios = [
    {id : "1", title : "p1"},
    {id : "2", title : "p2"},
    {id : "3", title : "p3"}
  ];

  return (
    <div>
      <ul>
       {portfolios.map(portfolio =><li><Link href={`/portfolio/${portfolio.id}`}>{portfolio.title}</Link></li>)}
      </ul>
    </div>
  );
}


export default HomePage;
