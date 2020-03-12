import React from "react"
import "./Content.css"
import Typography from "@material-ui/core/Typography"

function ContentLoader(props) {
    return (
      <div className="ContentBox">
        <div>
            <div className="ContentImg">
              <img src={props.item.img}/>
            </div>

            <div className="ContentInfo">
              <Typography className="Category" variant="subtitle2"  component="subtitle2">
                {props.item.category}
              </Typography>
              <br></br>
              <Typography className="Heading" component="subtitle2">
                {props.item.heading}
              </Typography>
              <br></br>

              <Typography className="SeeMore" component="subtitle2">
              {props.item.seeMore}
              </Typography>
            </div>
          </div>
        </div>

    )
}

export default ContentLoader
