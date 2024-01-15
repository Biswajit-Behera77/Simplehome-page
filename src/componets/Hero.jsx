function Herosection(){
    return(
        <main className="Hero container">
            <div className="Hero-content">
               <h1>You Deserve the Best.</h1>
               <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat vel quibusdam eius explicabo provident quae asperiores ab autem labore voluptatibus?
               </p>
               <div className="Hero-btn">
                <button>Shop Now</button>
                <button className="second-btn">Category</button>
                <div/>
                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="Amazon logo" />
                        <img src="/images/flipkart.png" alt="flipkart logo" />
                    </div>
                </div>
               </div>
            </div>
            <div className="Hero-img">
                <img src="/images/hhero-image.png" alt="hero image" />
            </div>
        </main>

    );
}
export default Herosection;