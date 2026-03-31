import "../assets/style7.css";
export default function Web7() {
    return(
        <>
        <body>
            <div className="container">
            <nav>
            <h2 className="logo">Portfo<span>lio.</span></h2>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="buttons">
                <a href="#" className="login">Log In</a>
                <a href="#" className="register">Register</a>
            </div>
           </nav>
           <div className="content">
            <h3>Hello,<br />It's Me CoderBoy...</h3>
            <p>I am a Web Developer & Designer. I will Make Your projects Beautiful and Attractive,<br />YOu can find me on Github</p>
            </div>
            <div className="link">
            <a href="#" className="hire">Hire Me</a>
            </div>
            </div>
        </body>
        </>
    );
}