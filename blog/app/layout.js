import Head from "next/head"
import Script from "next/script";
import './style.css';
import Link from "next/link";
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
export default function RootLayout({ children }) {
  return (    
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
      </head>
      <body>
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
      <Link href="/">
      <div className="navbar-brand">
        <img src="/logo.jpg" className="logo" alt="Logo" />
      </div>
    </Link>
    
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
      <Link href="/" legacyBehavior><a className="nav-link">Home</a></Link>
        
      </li>
      <li className="nav-item">
      <Link href="/login" legacyBehavior><a className="nav-link" >Login</a></Link>
      </li>
      <li className="nav-item">
      <Link href="/register" legacyBehavior><a className="nav-link" >Register</a></Link>
      </li>    
    </ul>
  </div>  
</nav>
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js" async></Script>
        <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" async></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" async></Script>
      </body>
    </html>
  );
  
}
