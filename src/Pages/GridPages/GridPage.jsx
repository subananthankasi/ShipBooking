import React from 'react'
import Gulf_1 from "../../Assets/GridImg/Gulfcraft/Gulfcraft1.png"
import Gulf_2 from "../../Assets/GridImg/Gulfcraft/Gulfcraft2.jpeg"
import Gulf_3 from "../../Assets/GridImg/Gulfcraft/Gulfcraft3.jpeg"
import Gulf_4 from "../../Assets/GridImg/Gulfcraft/Gulfcraft4.jpeg"
import Gulf_5 from "../../Assets/GridImg/Gulfcraft/Gulfcraft5.jpeg"
import Gulf_6 from "../../Assets/GridImg/Gulfcraft/Gulfcraft6.jpeg"
import Gulf_7 from "../../Assets/GridImg/Gulfcraft/Gulfcraft7.jpeg"
import Gulf_8 from "../../Assets/GridImg/Gulfcraft/Gulfcraft8.jpeg"
import Gulf_9 from "../../Assets/GridImg/Gulfcraft/Gulfcraft9.jpeg"
import Gulf_10 from "../../Assets/GridImg/Gulfcraft/Gulfcraft10.jpeg"
import Gulf_11 from "../../Assets/GridImg/Gulfcraft/Gulfcraft11.jpeg"
import Gulf_12 from "../../Assets/GridImg/Gulfcraft/Gulfcraft12.jpeg"
import Gulf_13 from "../../Assets/GridImg/Gulfcraft/Gulfcraft13.jpeg"
import Mejesty_50_1 from "../../Assets/GridImg/Mejesty_50/Mejesty_50_1.jpeg"
import Mejesty_70_1 from "../../Assets/GridImg/Mejesty_70/Mejasty_70_1.jpeg"
import Azimut_1 from "../../Assets/GridImg/Azimut/Azimut_1.jpeg"



const GridPage = () => {
  return (
    <>
      <div className="container-fluid mt-3 mb-3">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
          <div className="col">
            <div className="card p-0">
              <img src={Gulf_1} alt="" />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={Gulf_2} alt="" style={{ height: "300px", width: "100%", objectFit: "cover" }} />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={Gulf_3} alt="" style={{ height: "300px", width: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default GridPage