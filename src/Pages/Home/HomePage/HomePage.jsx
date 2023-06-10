import Banner from '../Banner/Banner';
import TotalStudents from '../TotalStudents/TotalStudents';
import PopularClasses from './../PopularClasses/PopularClasses';
import PopularInstructors from './../PopularInstructors/PopularInstructors';

const HomePage = () => {

    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <TotalStudents></TotalStudents>
            
        </div>
    );
};

export default HomePage;