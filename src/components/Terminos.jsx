import { Card, Container, Typography } from '@mui/material'
import React from 'react'

export const Terminos = () => {
  return (
    <>
        <Container maxWidth='lg' sx={{ mt: { md: '3em', xs: '8em' }, mb: 5 }} style={{ display:'flex', justifyContent:'center' }} >
            <Card sx={{ maxWidth: 900, boxShadow:13, padding:10}} >

                <Typography variant="body" gutterBottom sx={{fontSize:18, color:'#888'}}>
                    <p>REGLAS DE OPERACIÓN DEL SISTEMA DE CITAS MEDIANTE PLATAFORMA EN LÍNEA DEL PODER JUDICIAL DEL ESTADO DE COAHUILA DE ZARAGOZA</p>
                    
                    <p>CAPÍTULO I. DISPOSICIONES GENERALES</p>

                    <p>Artículo 1. El sistema de citas mediante plataforma en línea (en adelante SCL) tendrá por objeto agendar citas en línea para las personas que son parte, así como para sus representantes legales, en los procedimientos que se tramitan en los juzgados de primera instancia en materias civil, mercantil, familiar y penal; en los juzgados letrados civiles y en los tribunales distritales.</p>

                    <p>Artículo 2. Para hacer uso del SCL se deben cumplir los mismos requisitos de capacidad legal previstos en el Código Civil y en el Código Procesal Civil del Estado de Coahuila de Zaragoza y la legislación en materia penal, y demás normatividad aplicable a los órganos jurisdiccionales referidos en el párrafo anterior.</p>

                    <p>Artículo 3. El SCL no dejará sin efectos los mecanismos y modalidades que previo a su implementación se han venido practicando en el Poder Judicial del Estado de Coahuila de Zaragoza.</p>

                    <p>El SCL no impide que las y los justiciables puedan acudir a los órganos jurisdiccionales sin previa cita.</p>

                    <p>Artículo 4. La Oficialía Mayor del Poder Judicial del Estado será el órgano encargado de la implementación y administración del SCL a través de la Dirección competente para ello, por lo que deberá realizar las gestiones administrativas necesarias para tal efecto, así como las de socialización del sistema entre las y los operadores de justicia y de la ciudadanía en general.</p>

                    <p>Artículo 5. La Oficialía Mayor podrá elaborar manuales, lineamientos y demás documentos que sean necesarios para cumplir con el artículo anterior.</p>

                    <p>Asimismo, podrá realizar las acciones que se requieran para la debida coordinación con los órganos jurisdiccionales y administrativos que sean pertinentes.</p>

                </Typography>
            </Card>
        </Container>
    </>
  )
}
