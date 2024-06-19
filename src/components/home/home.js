import Styles from "./home.module.css"
// import HomeImage from "../../images/HomePage.jpg"

const HomePage = () =>{
    
    return (
      <div className={Styles.home}>
          {/* <img className={Styles.img_style} src={HomeImage} alt="/"></img> */}
          <span className={Styles.content}>
                Pkubes Home Page
          </span>
          
      </div>
    )
}


export default HomePage