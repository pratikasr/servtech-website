import { ShieldCheck, Network, Mail, Wifi, Search, Database } from 'lucide-react';
import styles from './ProjectHighlights.module.css';

const projects = [
    {
        icon: <ShieldCheck size={22} />,
        title: 'EDR & Deception Deployment',
        description: 'Successfully implemented EDR solutions to enhance security and deception technologies to prevent breaches.'
    },
    {
        icon: <Network size={22} />,
        title: 'DNAC, ACI, ISE Projects',
        description: 'Led projects involving DNA Center, Application Centric Infrastructure, and Identity Services Engine for network management.'
    },
    {
        icon: <Mail size={22} />,
        title: 'Exchange & AD Migrations',
        description: 'Seamlessly migrated to Exchange and Active Directory, ensuring minimal downtime and improved efficiency.'
    },
    {
        icon: <Wifi size={22} />,
        title: 'SD-WAN & Firewall Rollouts',
        description: 'Implemented SD-WAN technologies and advanced firewall solutions to enhance network performance and security.'
    },
    {
        icon: <Search size={22} />,
        title: 'VAPT & Infra Audit',
        description: 'Conducted Vulnerability Assessment and Penetration Testing along with comprehensive infrastructure audits.'
    },
    {
        icon: <Database size={22} />,
        title: 'Cloud & DB Support',
        description: 'Provided ongoing support for cloud environments and database management, ensuring operational stability.'
    }
];

export default function ProjectHighlights() {
    return (
        <section className={styles.projectsSection}>
            <div className="container">
                <div className={styles.header}>
                    <h2>Project Highlights</h2>
                    <p>
                        Key achievements and accomplishments in IT services delivery.
                    </p>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className={styles.card}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={styles.iconWrapper}>
                                {project.icon}
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
