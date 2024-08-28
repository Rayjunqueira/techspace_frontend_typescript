import * as C from './styles';

import PixIcon from '@mui/icons-material/Pix';
import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';
import PaymentsIcon from '@mui/icons-material/Payments';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import PersonIcon from '@mui/icons-material/Person';

type Props = {}

const CoursesInfo = (props: Props) => {
  return (
    <C.ContainerCourseInfo>
        <C.CoursesInfoBuy>
            <C.CourseInfo>
                <i><PixIcon /></i>
                <h3>Aceitamos PIX</h3>
            </C.CourseInfo>
            <C.CourseInfo>
                <i><SchoolIcon /></i>
                <h3>Acesso a professores</h3>
            </C.CourseInfo>
            <C.CourseInfo>
                <i><ArticleIcon /></i>
                <h3>Material 100% liberado</h3>
            </C.CourseInfo>
            <C.CourseInfo>
                <i><PaymentsIcon /></i>
                <h3>Reembolso instantaneo</h3>
            </C.CourseInfo>
            <C.CourseInfo>
                <i><HeadphonesIcon /></i>
                <h3>Suporte 100% eficiente</h3>
            </C.CourseInfo>
            <C.CourseInfo>
                <i><PersonIcon /></i>
                <h3>Possibilidade de networking</h3>
            </C.CourseInfo>
        </C.CoursesInfoBuy>
    </C.ContainerCourseInfo>
  )
}

export default CoursesInfo;