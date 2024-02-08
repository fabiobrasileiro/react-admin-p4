import { useTheme } from '@emotion/react'
import React from 'react'
import Header from '../../components/Header';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { GridExpandMoreIcon } from '@mui/x-data-grid';
import { tokens } from '../../theme';


const Faq = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
        <Header title="FAQ" subtitle="Encontre as dúvidas mais perguntadas aqui"/>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Você trabalho com outros tipos de serviços?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Sim! Trabalho com Design, Marketing, Desenvolvimento e Tradução Inglês/Francês.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Qual o seu Behance?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                https://www.behance.net/fbiobrasileiro2
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Como faco para entrar em contato com Fábio Brasileiro?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Pode mandar um email para "fabiobrasileiromidia@gmail.com" ou pode mandar um zap (71) 9 8141 - 8710
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    Qual o link para ver o seu Linkedin?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                https://www.linkedin.com/in/f%C3%A1bio-brasileiro-658250212/
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    E o Github?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                https://github.com/fabiobrasileiro
                </Typography>
            </AccordionDetails>
        </Accordion>
        
        
    </Box>
  )
}

export default Faq
