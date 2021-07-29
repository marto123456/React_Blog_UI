import "./SinglePost.css"

export default function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlepostWrapper">
        <img
          className="singlePostImg"
          src={process.env.PUBLIC_URL + "/assets/img/accountbgc.jpg"}
          alt=""
        />
        <h1 className="singlePostTitle">
          Some good title
          <div className="singlePostEdit">
            <div className="edit">Edit</div>
            <div>Delete</div>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: Ogonna Martins</span>
          <span className="singlePostDate">2 hours ago</span>
        </div>
        <p className="singlePostDescription">
          Lorum Ipseaum is the new way to go
          dkjlkafjkfjdkljalfjkdjlfkajfkdjakljdkjklajfkljdfkjdklfjdkfjdkfjd
          lhdfkalfhdkjfljdfaklfjafiewirjafkldfjkajfioajedjfpoijaifdklhfiowhaioejfaoiljrihaerer
          a;uijriajfkjiajifjeijfdifhaiodsfjdsifjdifjdiofjadsifjadifjdiofjdsifjasifhadsiofjdsiofh
          dsfsjafjdkjfakljfkjdkjlkafjkfjdkljalfjkdjlfkajfkdjakljdkjklajfkljdfkjdklfjdkfjdkfjd
          lhdfkalfhdkjfljdfaklfjafiewirjafkldfjkajfioajedjfpoijaifdklhfiowhaioejfaoiljrihaerer
          a;uijriajfkjiajifjeijfdifhaiodsfjdsifjdifjdiofjadsifjadifjdiofjdsifjasifhadsiofjdsiofh
          dsfsjafjdkjfakljfkjdkjlkafjkfjdkljalfjkdjlfkajfkdjakljdkjklajfkljdfkjdklfjdkfjdkfjd
          lhdfkalfhdkjfljdfaklfjafiewirjafkldfjkajfioajedjfpoijaifdklhfiowhaioejfaoiljrihaerer
          a;uijriajfkjiajifjeijfdifhaiodsfjdsifjdifjdiofjadsifjadifjdiofjdsifjasifhadsiofjdsiofh
          dsfsjafjdkjfakljfkjdkjlkafjkfjdkljalfjkdjlfkajfkdjakljdkjklajfkljdfkjdklfjdkfjdkfjd
          lhdfkalfhdkjfljdfaklfjafiewirjafkldfjkajfioajedjfpoijaifdklhfiowhaioejfaoiljrihaerer
          a;uijriajfkjiajifjeijfdifhaiodsfjdsifjdifjdiofjadsifjadifjdiofjdsifjasifhadsiofjdsiofh
          dsfsjafjdkjfakljfkjdkjlkafjkfjdkljalfjkdjlfkajfkdjakljdkjklajfkljdfkjdklfjdkfjdkfjd
          lhdfkalfhdkjfljdfaklfjafiewirjafkldfjkajfioajedjfpoijaifdklhfiowhaioejfaoiljrihaerer
          a;uijriajfkjiajifjeijfdifhaiodsfjdsifjdifjdiofjadsifjadifjdiofjdsifjasifhadsiofjdsiofh
        </p>
      </div>
    </div>
  )
}
