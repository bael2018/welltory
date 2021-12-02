import cls from './App.module.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Rate } from './components/Rate'
import { PlanTitle } from './components/PlanTitle'
import { PlanList } from './components/PlanList'
import { firstInitialState , secondInitialState } from './base'
import { PlanFooter } from './components/PlanFooter'

const App = () => {
    return (
        <section className={cls.root}>
            <Navbar/>
            <div className={cls.root_container}>
                <Rate/>
                <PlanTitle/>
                <PlanList 
                    array={firstInitialState} 
                    title='Feel better fast' 
                />
                <PlanList 
                    array={secondInitialState} 
                    title='Gain rich health insights' 
                />
                <PlanFooter/>
            </div>
            <Footer/>
        </section>
    )
}

export { App }