import cls from './PlanFooter.module.css'

const PlanFooter = () => {
    return (
        <section className={cls.btn}>
            <button>
                go with the free version
            </button>
            <button>
                upgrade now
            </button>
        </section>
    )
}
 
export { PlanFooter }