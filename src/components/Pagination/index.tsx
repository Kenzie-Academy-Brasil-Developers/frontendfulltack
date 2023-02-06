import { PaginationStyled, Block } from "./style";
import { motion } from "framer-motion";
import Icons from "../../service/icons";
import { memo } from "react";

interface IPropsPagination {
    previousPage?: string | null
    functionPreviousPage:Function
    nextPage?: string | null
    functionNextPage: Function
}

const Pagination = ( { previousPage, functionPreviousPage, nextPage, functionNextPage }:IPropsPagination ) => {

    return (
        <PaginationStyled>
            <Block>
                <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="preview_course__button_rating" 
                    disabled={!previousPage}
                    style={{ background: !previousPage ? "#31383D" : " #2F76E0" }}
                    onClick={()=>{
                        if( previousPage ){
                            functionPreviousPage()
                        }}}
                >
                    <Icons.PreviousPage/>
                </motion.button >
                <motion.button 
                    whileTap={{ scale: 0.95 }}
                    className="preview_course__button_rating" 
                    disabled={!nextPage}
                    style={{ background: !nextPage ? "#31383D" : " #2F76E0" }}
                    onClick={()=>{
                        if( nextPage ){
                            functionNextPage()
                        }}}
                >
                    <Icons.NextPage/>
                </motion.button >
            </Block>
        </PaginationStyled>
    )
}

export default memo(Pagination)