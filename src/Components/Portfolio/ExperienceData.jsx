import React from 'react';
import { Card, Timeline, Typography } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const experiences = [
  {
    "company": <Title style={{ color: '#fff' }} level={4}>DImpulso<span style={{ color: '#ff4191' }}>X</span></Title>,
    "role": "Full Stack Developer / Web Design",
    "date": "Nov. 2024 - Actualidad",
    "description": [
      "Participé en el desarrollo de una plataforma e-commerce, con foco en el backend: diseño de API RESTful, modelado de base de datos y pruebas unitarias.",
      "Colaboré en tareas del frontend, aportando en la integración y desarrollo de componentes clave.",
      "Creación de tiendas online, blogs, landing pages y sitios corporativos (WordPress Elementor PRO, Bricks).",
      "Mantenimiento y soporte técnico personalizado.",
      "Desarrollo de soluciones digitales a medida, incluyendo aplicaciones web, móviles y de escritorio tales como e-commerces, sistemas CRM, paneles administrativos y dispositivos interactivos (tótems).",
      "Responsable del desarrollo y mantenimiento de aplicaciones web, móviles (Android/iOS), dashboards y software de escritorio, incorporando nuevas funcionalidades y brindando soporte continuo.",
      "Diseño y desarrollo de sitios web institucionales y landing pages con WordPress (Elementor PRO, Bricks).",
      "Creación y mantenimiento de tiendas online.",
      "Gestión de servicios y recursos en la nube (DigitalOcean, AWS)."
    ]
  },
  {
    "company": <Title style={{ color: '#fff' }} level={4}>EMPREBIT</Title>,
    "role": "Freelance Web Designer and Developer",
    "date": "Febrero 2023 - Nov. 2024",
    "description": [
      "Diseño web completo utilizando WordPress con Elementor PRO y Bricks Builder.",
      "Creación de tiendas en línea para clientes, optimizando la conversión y el SEO.",
      "Implementación de sitios web multisección, blogs y landing pages personalizados.",
      "Mantenimiento y soporte continuo para actualizaciones y rendimiento.",
      "Desarrollo web a medida, utilizando tecnologías frontend como HTML, CSS, SASS, Bootstrap, JavaScript, TypeScript y React.js.",
      "Desarrollo backend con Nest.js, Node.js, Express, MongoDB, PostgreSQL y Laravel para soluciones robustas y escalables.",
      "Gestión de proyectos en plataformas como DigitalOcean y AWS, incluyendo administración de servidores, hosting y dominios.",
      "Aplicación de metodologías ágiles como SCRUM, gestionando tareas en Confluence y Jira."
    ]
  },
  {
    "company": <Title style={{ color: '#fff' }} level={4}><span style={{ color: '#ff4191' }}>{`{FK}`}</span>TECH</Title>,
    "role": "Full-Stack Developer",
    "date": "Junio 2023 - Febrero 2024",
    "description": [
      "Desarrollo de un ecommerce de productos digitales utilizando tecnologías como Next.js y Nest.js.",
      "Creación de una API RESTful, con manejo de base de datos en Postgres.",
      "Pruebas unitarias usando Jest para asegurar la estabilidad de la aplicación.",
      "Optimización del flujo de compras y experiencia de usuario para maximizar ventas."
    ]
  }
]

const ExperienceData = () => {
  return (
    <div className='p-5'>
      <Title level={2} style={{ color: '#fff' }}>Experiencia <span className='text-[#ff4191]'>Profesional y Proyectos</span></Title>
      <Timeline style={{ color: '#ccc' }} mode="left">
        {experiences.map((item, index) => (
          <Timeline.Item
            key={index}
            color='red'
          >
            {item.company}
            <Text className='relative -top-3' style={{ color: '#fff' }}>{item.date}</Text> {/* Fecha debajo del nombre de la empresa */}
            <br />
            <Text style={{ color: '#fff' }}>{item.role}</Text>
            <ul>
              {item.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default ExperienceData;
