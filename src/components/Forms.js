import React from 'react'
import form from '../img/form.png'
// import ScriptTag from 'react-scripts-tag'
const Forms = () => {
  return (
    <div className="sub-con">
		<div className="requirements">
			<h2>Loan requirements</h2>
			<ul>
				<li>&#10003; Lorem ipsum dolor sit amet consectetur adipisicing.</li>
				<li>&#10003; Lorem ipsum dolor sit.</li>
				<li>&#10003; Lorem ipsum dolor sit amet.</li>
			</ul>
		</div>
				<div className="con-form" >
					
						<div className="form" >
								<h2 className="form-name" id="form-name">FORM 1</h2>
								<a href="../apk.txt" class="download" download>Download</a>
								<img src={form} alt="form" />
						</div>
						<div className="form" >
								<h2 className="form-name" id="form-name">FORM 2</h2>
								<a href="../apk.txt" class="download" download>Download</a>
								<img src={form} alt="form" />
						</div>
						<div className="form" >
						<h2 className="form-name" id="form-name">FORM 3</h2>
								<a href="../apk.txt" class="download" download>Download</a>
								<img src={form} alt="form" />	
						</div>
						<div className="form" >
								<h2 className="form-name" id="form-name">FORM 4</h2>
								<a href="../apk.txt" class="download" download>Download</a>
								<img src={form} alt="form" />
						</div>
        </div>
   </div>
    

  )
}

export default Forms