import React from 'react'
import styles from '@/app/styles/services.module.scss'

interface Props {
  title: string
  text: string
  icon: string
}

const services: Props[] = [
  {
    title: 'Desenvolvimento de aplicativos móveis',
    text: 'Criamos aplicativos mobile personalizados que ajudam sua empresa a se conectar melhor com clientes, melhorar processos internos e explorar novas oportunidades de mercado.',
    icon: 'phone_iphone',
  },
  {
    title: 'Desenvolvimento WEB',
    text: 'Criamos websites personalizados e soluções SaaS que permitem às empresas expandir sua presença digital, otimizar operações e oferecer serviços inovadores online, atendendo às demandas do mercado moderno.',
    icon: 'travel_explore',
  },
  {
    title: 'Desenvolvimento de Servidores e APIs',
    text: 'Desenvolvemos servidores escaláveis e APIs robustas que garantem a comunicação eficiente entre sistemas, possibilitando a integração de dados e automação de processos para suportar o crescimento do seu negócio.',
    icon: 'nearby',
  },
  {
    title: 'Desenvolvimento de Sistemas',
    text: 'Sabemos que cada empresa tem suas próprias necessidades e processos únicos. Por isso oferecemos desenvolvimento de sistemas personalizados, criados sob medida para resolver desafios específicos e otimizar o funcionamento do seu negócio.',
    icon: 'desktop_windows',
  },
]

export default function Services() {
  return (
    <>
      <section
        className={`${styles.section1} px-32 pb-32 flex flex-col gap-16 w-full items-center`}
      >
        <h2
          className={`${styles.section1Title} text-5xl text-gray text-left w-full`}
        >
          NOSSOS <span className="text-redlight">SERVIÇOS</span>
        </h2>
        <ul className="text-reddark flex flex-col gap-8 text-xl w-full">
          {services.map((service, index) => (
            <li key={index} className="w-full flex justify-between p-4">
              <div className="flex flex-row items-center gap-4">
                <span className="material-symbols-outlined">
                  {service.icon}
                </span>
                <h3>{service.title}</h3>
              </div>
              <p className="max-w-[768px]">{service.text}</p>
            </li>
          ))}
        </ul>
        <button className="max-w-128 text-2xl border-2 text-[#fff] px-16 py-4 rounded-xl bg-redlight hover:bg-[#fff] hover:border-2 border-redlight hover:text-redlight">
          CONTATE-NOS
        </button>
      </section>
    </>
  )
}
