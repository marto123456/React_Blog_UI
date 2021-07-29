import "./Post.css"

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src={process.env.PUBLIC_URL + "/assets/img/accountbgc.jpg"}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <div className="postCat">Music</div>
          <div className="postCat">Arts</div>
          <div className="postCat">Collection</div>
        </div>
        <span className="postTitle">Post Title</span>
        <hr />
        <span className="postDate">2 hours ago</span>
      </div>
      <div className="postInfo">
        <div className="postDescription">
          <p>
            sdfjfldjfajdfjkldsjfksdjfdsjlfdsklfjalkfjdskfjdsklfjdklfjadskl
            fjkdsjfdsjfkdsjfkldjfkldjfkldsjfkldsjfkljdfadklfjklsjdfjskflskdf
            klfklsafdskjfkladsjfkldjakjfdkjafkljkjdkafjdkljfadskfjdklfadsklf
            fhakfhdhfdlfdkjfjlds
          </p>
        </div>
      </div>
    </div>
  )
}
