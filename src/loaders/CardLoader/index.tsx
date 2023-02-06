import { CardLoaderStyled } from "./style";
import ContentLoader from 'react-content-loader'

const CardLoader = () => {

    return (
        <CardLoaderStyled>
            <span className="basic item_2">
                <ContentLoader 
                    speed={0.8}
                    height={"30px"}
                    backgroundColor="#212529"
                    foregroundColor="#31383d"
                >
                    <rect x="0" y="0" rx="8" ry="8" width="150" height="20" /> 
                </ContentLoader>
            </span>
            <span className="basic item_5">
                <ContentLoader 
                    speed={0.8}
                    height={"48px"}
                    backgroundColor="#212529"
                    foregroundColor="#31383d"
                >
                    <rect x="0" y="0" rx="8" ry="8" width="125" height="48" />
                </ContentLoader>
            </span>  
        </CardLoaderStyled>
    )
}

export default CardLoader