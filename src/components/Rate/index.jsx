import { useState } from 'react'
import cls from './Rate.module.css'

const Rate = () => {
    const [rate , setRate] = useState(false)

    return (
        <section className={cls.rate}>
            <div className={cls.rate_title}>
                <img src="img/welltoryPro.png" alt="welltoryPro" />
                <p>Take better care of yourself every day</p>
            </div>
            <div className={cls.rate_body}>
                <div 
                    onClick={() => setRate(true)}
                    className={`
                        ${cls.rate_body_child} 
                        ${cls.rate_body_child_left}
                        ${rate ? cls.rate_body_child_active : ''}
                    `}>
                    <div className={cls.rate_body_child_wrapper}>
                        <div className={cls.rate_body_child_header}>
                            <h4>Monthly</h4>
                            <p>$ 5.99 <br /> <span>$ 7.99</span></p>
                        </div>
                        <div className={cls.rate_body_child_footer}>
                            <p>Billed every month</p>
                        </div> 
                    </div> 
                </div>

                <div 
                    onClick={() => setRate(false)}
                    className={`
                        ${cls.rate_body_child} 
                        ${cls.rate_body_child_right}
                        ${rate ? '' : cls.rate_body_child_active}
                    `}>
                    <div className={cls.rate_body_child_wrapper}>
                        <div className={cls.rate_body_child_header}>
                            <h4>Annual</h4>
                            <p>$ 4.59 <br /> <span>$ 7.99</span></p>
                        </div>
                        <div className={cls.rate_body_child_footer}>
                            <p>$79 billed once a year</p>
                        </div> 
                    </div>   
                </div>
            </div>
            <div className={cls.rate_footer}>
                <button>continue</button>
                <p>No commitments. Cancel anytime</p>
            </div>
        </section>
    )
}

export { Rate }