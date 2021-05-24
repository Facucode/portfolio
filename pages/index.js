import Link from 'next/link'
import Layout from '../components/Layout'
import {skills, projects} from '../profile'
console.log(skills)
const Index = () => (

<Layout>
    {/** Header card */}
    <header classsName="row">
        <div className="col-md-12">
            <div className="card card-body bg-dark text-light">
                <div className="row">
                    <div className="col-md-4">
                        <img src="" alt="" />
                    </div>
                    <div className="col-md-8">
                        <h1>Facundo Oyola</h1>
                        <h1>Software Developer</h1>
                        <p>About me</p>
                        <a href="/hireme">Hire Me</a>

                    </div>
                </div>
            </div>
        </div>
    </header>
    {/** Second section */}
    <div className="row py-2">
        <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>
                        <ul>
                        {
                            skills.map(({skill,icon},i) =>(
                            <li  key={i}>
                            <h6>{skill}</h6><img src={icon} width="30" height="30"/>
                                
                            </li>))
                        }
                        </ul>
                    </div>
                </div>
        </div>
        <div className="col-md-8">
        <div className="card bg-light">
            <div className="card-body">
                
                <h1>Experience</h1>
                <ul>
                   <li> <h3>Clarolab</h3>
                    <h5>06/2020-11/2020</h5>
                    <p>
                    Intern at Clarolab, working on different tasks and development for the Automated Test Management App frontend with React and the Backend with Java, 
                    making calls to the apis with axios and improving elements of the view 
                    and internal functionalities, using the git repository. 
                    Inside I had training with React courses, JavaScript and Java.
                    </p></li>

                    </ul>
                <h1>Education</h1>
                   <ul>
                       <li>
                         <h4>Universidad Nacional del Noroeste de la Provincia de Buenos Aires</h4>
                    <p>Grade: Systems Analist <br />
                    State: Finished <br />
                    2015-2021</p>
                        </li>
                        <li>
                 <h4>Universidad Nacional del Noroeste de la Provincia de Buenos Aires</h4>
                    <p>Grade: Bachelor of Systems <br />
                    State: In progress <br />
                    2015-today</p>
                       </li>
                    </ul>
                 
            </div>
        </div>
        </div>
    </div>

{/**Portfolio */}

    <div className="row">
        <div className="col-md-12">
            <div className="card card-body bg-dark">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center text-light">Portfolio</h1>
                    </div>
                    {
                        projects.map(({title, description,image,link},i) =>(
                            <div className="col-md-4" key={i}>
                                <div className="card h-100">
                                    <div className="overflow">
                                    <img src={image} alt="" className="img-fluid card-img-top" />
                                    </div>
                                    <div className="card-body">
                                        <h3>{title}</h3>
                                        <p>{description}</p>
                                        <a href={link}>Watch it!</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="text-center mt-4">
                    <Link href="/portfolio">
                    <a className="btn btn-outline-light">More projects</a>
                    </Link>
                </div>

            </div>
           
        </div>
    </div>



</Layout>
)
export default Index;