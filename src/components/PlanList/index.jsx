import { PlanItem } from '../PlanItem'
import cls from './PlanList.module.css'

const PlanList = ({ title , array }) => {
    return (
        <section className={cls.list}>
            <div className={cls.list_title}>{title}</div>
            {
                array.map(item => <PlanItem key={item.content} {...item} />)
            }
        </section>
    )
}

export { PlanList }