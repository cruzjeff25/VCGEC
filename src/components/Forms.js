import React from 'react'
import form from '../img/form.png'
import pdf from '../documents/Form.pdf'

const Forms = () => {
  return (

	<div className="formBody">

		 <div className="requirements">
			<h2>Loan requirements</h2>
			<div className="req-con">
				<div>
					<h3>For Cheque</h3>
					<ul>	
						<li><p>Photocopy of the Latest Payslip</p></li>
					</ul>
				</div>
				<div>
					<h3>For ATM</h3>
					<ul>	
						<li><p>Photocopy of the Latest Payslip</p></li>
						<li><p>Photocopy of the ATM (Back & Front)</p></li>
					</ul>
				</div>
			</div>
		 </div>
		<h2 className="name">Regular Loan </h2>
		<div className="con-form" >			
			<div className="form" >
				<h2 className="form-name" id="form-name">Productivity Loan</h2>
				<a href={pdf} target='_blank' rel="noreferrer noopener" class="download" download>Download</a>
				<img src={form} alt="form" />
				</div>
			<div className="form" >
				<h2 className="form-name" id="form-name">Educational Loan</h2>
				<a href={pdf} target="_blank" rel="noreferrer noopener" class="download" download>Download</a>
				<img src={form} alt="form" />
				</div>
			<div className="form" >
				<h2 className="form-name" id="form-name">Travel Loan</h2>
				<a href={pdf} target='_blank' rel="noreferrer noopener" class="download" download>Download</a>
				<img src={form} alt="form" />	
			</div>
			<div className="form" >
				<h2 className="form-name" id="form-name">MIGS</h2>
				<a href={pdf} target='_blank' rel="noreferrer noopener" class="download" download>Download</a>
				<img src={form} alt="form" />
			</div>
			<div className="form" >
				<h2 className="form-name" id="form-name">1 COOP</h2>
				<a href={pdf} target='_blank' rel="noreferrer noopener" class="download" download>Download</a>
				<img src={form} alt="form" />
			</div>
			<div className="form" >
				<h2 className="form-name" id="form-name">Commodity Loan</h2>
				<a href={pdf} target='_blank' rel="noreferrer noopener" class="download" download>Download</a>
				<img src={form} alt="form" />
			</div>
			<div className="form" >
				<h2 className="form-name" id="form-name">Emergency/Calamity</h2>
				<a href={pdf} target='_blank' rel="noreferrer noopener" class="download" download>Download</a>
				<img src={form} alt="form" />
			</div>
			<div className="form" >
				<h2 className="form-name" id="form-name">Rediscounting</h2>
				<a href={pdf} target='_blank' rel="noreferrer noopener" class="download" download>Download</a>
				<img src={form} alt="form" />
			</div>
			<div className="form" >
				<h2 className="form-name" id="form-name">Promo</h2>
				<a href={pdf} target='_blank' rel="noreferrer noopener" class="download" download>Download</a>
				<img src={form} alt="form" />
			</div>
			<div className="form" >
				<h2 className="form-name" id="form-name">Motorcycle</h2>
				<a href={pdf} target='_blank' rel="noreferrer noopener" class="download" download>Download</a>
				<img src={form} alt="form" />
			</div>

        </div> 
		<h2 className="name">Special Loan </h2>
		<div className="con-form" >			
			<div className="form" >
				<h2 className="form-name" id="form-name">FORM 1</h2>
				<a href={pdf} target='_blank' rel="noreferrer noopener" class="download" download>Download</a>
				<img src={form} alt="form" />
				</div>
			<div className="form" ></div>
		</div>
	</div>
    

  )
}

export default Forms