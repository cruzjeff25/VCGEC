import React from 'react'
import form from '../img/form.jpg'
import comm from '../documents/commodity.pdf'
import educ from '../documents/educational.pdf'
import emlcal from '../documents/emergencyncalamity.pdf'
import migs from '../documents/MIGS.pdf'
import prod from '../documents/productivity.pdf'
import promo from '../documents/promo.pdf'
import s from '../documents/SpecialLoan.pdf'
import travel from '../documents/travel.pdf'


const Forms = () => {
  return (

	<div className="formBody">

		<div className="requirements">
			<h2>Loan requirements</h2>
			<sub>*Forms must be printed back to back on legal size bond paper</sub>
			<div className="req-con">
				<div>
					<h3>For PNB Cheque</h3>
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
		<div className='box-bg'>

			<h2 className="name">Regular Loans</h2>
			<div className="con-form" >			
				<div className="form" >
					<h2 className="form-name" id="form-name">Productivity Loan</h2>
					<a href={prod} target='_blank' rel="noreferrer noopener" class="download" download>Download</a>
					<img src={form} alt="form" />
					</div>
				<div className="form" >
					<h2 className="form-name" id="form-name">Educational Loan</h2>
					<a href={educ} target="_blank" rel="noreferrer noopener" class="download" download>Download</a>
					<img src={form} alt="form" />
					</div>
				<div className="form" >
					<h2 className="form-name" id="form-name">Travel Loan</h2>
					<a href={travel} target='_blank' rel="noreferrer noopener" class="download" download>Download</a>
					<img src={form} alt="form" />	
				</div>
				<div className="form" >
					<h2 className="form-name" id="form-name">MIGS</h2>
					<a href={migs} target='_blank' rel="noreferrer noopener" class="download" download>Download</a>
					<img src={form} alt="form" />
				</div>
				<div className="form" >
					<h2 className="form-name" id="form-name">Commodity Loan</h2>
					<a href={comm} target='_blank' rel="noreferrer noopener" class="download" download>Download</a>
					<img src={form} alt="form" />
				</div>
				<div className="form" >
					<h2 className="form-name" id="form-name">Emergency/Calamity</h2>
					<a href={emlcal} target='_blank' rel="noreferrer noopener" class="download" download>Download</a>
					<img src={form} alt="form" />
				</div>
				<div className="form" >
					<h2 className="form-name" id="form-name">Promo</h2>
					<a href={promo} target='_blank' rel="noreferrer noopener" class="download" download>Download</a>
					<img src={form} alt="form" />
				</div>

			</div> 
			<h2 className="name">Special Loan</h2>
			<p className='sub'> Includes Clothing Allowance, Mid-year Bonus, Year-end Bonus, Cash Gift / P.E.I and others </p>
			<div className="con-form" >			
				<div className="form" >
					<h2 className="form-name" id="form-name">Rediscounting</h2>
					<a href={s} target='_blank' rel="noreferrer noopener" class="download" download>Download</a>
					<img src={form} alt="form" />
					</div>
				<div className="form" ></div>
			</div>
		</div>
	</div>
    

  )
}

export default Forms