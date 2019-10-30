import Link from 'next/link'
const Mainlayout = props =>{
    return (
        <div className='container'>
            
            <div className='topbar'>
            <div className='logo-container'>
            <Link href='/'> 
            <a>STOCK</a>
            </Link>
            </div>
            <div className='menu-container'>
            <div>
            <Link href='/product'> 
                 <a classname='link'>Products</a>
                 </Link>
                 </div>
                 <div>
            <Link href='/manage'> 
                 <a>Manege</a>
                 </Link>
                 </div>
                 <div>
            <Link href='/profile'> 
                 <a>Profile</a>
                 </Link>
                 </div>
           
            </div>
            </div>
            <div classname='content'>
            
            </div>
            <style jsx>{`
                .topbar{
                    display:flex;
                   justify-content:space-between;
                   align-items:center;
                   height:32px;
                   background-color:red;
                   padding:0 40px;
                }
                .menu-container {
                    display:flex;
                }
                .menu-container div{
                    margin-left:20px;
                }
                .link{
                    text-decoration:none;
                    color:black;
                }
                h3:hover{
                   color : red; 
                }
                
                
            `}</style>
            
        </div>
    )
}