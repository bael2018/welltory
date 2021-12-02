import cls from './PlanItem.module.css'

const PlanItem = ({ content , free , pro , isBorder }) => {
    return (
        <section 
            className={cls.item}
            style={{
                border: isBorder && 'none'
            }}
        >
            <p>
                { content }
            </p>
            <div>
                <img src={free} alt="free" />
            </div>
            <div>
                <img src={pro} alt="pro" />
            </div>
        </section>
    )
}

export { PlanItem }
