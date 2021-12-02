import cls from './PlanTitle.module.css'

const PlanTitle = () => {
    return (
        <section className={cls.plan}>
            <h4>Choose the best plan for you</h4>

            <div className={cls.plan_wrapper}>
                <div className={cls.plan_wrapper_child}>
                    What you get
                    <span></span>
                </div>
                <div className={cls.plan_wrapper_child_alt}>
                    <p>Free</p>
                    <b>for free</b>
                    <span></span>
                </div>
                <div className={`${cls.plan_wrapper_child_alt} ${cls.plan_wrapper_child_alt_active}`}>
                    <b>in</b> Pro
                    <span></span>
                </div>
            </div>
        </section>
    )
}

export { PlanTitle }