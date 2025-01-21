import icon1 from "../assets/Frame a0.png"
import icon2 from "../assets/Frame a1.png"
import icon3 from "../assets/Frame a2.png"
import icon4 from "../assets/Frame a3.png"
import icon5 from "../assets/Frame a4.png"
import icon6 from "../assets/Frame a5.png"
import icon7 from "../assets/Frame a6.png"
import icon8 from "../assets/Frame a7.png"
import icon9 from "../assets/Frame a8.png"
import icon10 from "../assets/Frame a9.png"
import icon11 from "../assets/Frame a10.png"
import icon12 from "../assets/Frame a11.png"

const ProgramDetails = () => {
    const programdettails =[
        {
            title: '150+',
            description: 'hours Instructor-Led Session',
            icon: icon1
          },
          {
            title: '60+ ',
            description: 'hours of self-paced videos',
            icon: icon2
          },
          {
            title: '200+ ',
            description: 'Hands-on exercises',
            icon: icon3
          },
          {
            title: '175+',
            description: '175+ hours of Learnings',
            icon: icon4
          },
          {
            title: '10+',
            description: 'Real world projects',
            icon: icon5
          },
          {
            title: 'Well Structured',
            description: ' Industry curriculum',
            icon: icon6
          },
          {
            title: '30+',
            description: 'hours of problem-solving sessions',
            icon: icon7
          },
          {
            title: '25+',
            description: 'Auto Graded Assessment',
            icon: icon8
          },
          {
            title: '25+',
            description: 'Auto Graded Assessment',
            icon: icon9
          },
          {
            title: '30+',
            description: 'hours of career coaching',
            icon: icon10
          },
          
         
         
    ];
    
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {programdettails.map((program, index) => (
            <div
              key={index}
              className="flex items-center p-2 border rounded-lg " 
            >
              <img src={program.icon} alt={program.title} className="w-12 h-12 mr-4 " />
              <h3 className="text-lg font-bold ">{program.title}</h3>
              <p className='text-md'>{program.description}</p>
            </div>
          ))}
        </div>
        </>
    )
}

export default ProgramDetails;