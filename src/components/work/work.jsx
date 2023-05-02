import { 
    WorkContainer,
    WorkSection,
    WorkName,
    TimeFrame,
    HeadWork,
    WorkTitle, 
} from './work-styles'

const Work = () => {
  return (
    <>            
        <HeadWork>
            <hr/>
                <WorkTitle>
                    Work Experience
                </WorkTitle>
            <hr/>
        </HeadWork>
        <WorkContainer>
            <WorkSection>
                <WorkName>Design Consultant - ShelfGenie</WorkName>
                <TimeFrame>2020-Present</TimeFrame>
                <ul>
                    <li>Developed 3D digital mockups to showcase customized storage solutions.</li>
                    <li>Crafted and presented persuasive sales presentations to customers 2-3 times a day. </li>
                    <li>Strategically planned and efficiently completed multiple assignments in a timely manner</li>
                </ul>
            </WorkSection>
            <WorkSection>
                <WorkName>E-commerce Admin - Palm Beach Collective</WorkName>
                <TimeFrame>2022-2023</TimeFrame>
                <ul>
                    <li>Managed an e-commerce website to fulfill 200+ orders a day with high efficiency</li>
                    <li>Acted as a key resource in coordinating business operations, including multiple tasks of varying complexity.</li>
                    <li>Assisted proprietor in driving team performance and achieving success</li>
                </ul>
            </WorkSection>
            <WorkSection>
                <WorkName>Retail Manager - Lady M</WorkName>
                <TimeFrame>2019-2020</TimeFrame>
                <ul>
                    <li>Promoted from Associate to Manager in under 12 months.</li>
                    <li>Led the retail team’s transformation from pop-up to a full-scale store during the re-opening of COVID.</li>
                    <li>Assisted an effortless transition to new store format with all new procedures for the team.</li>
                    <li>Managed ordering over 100boxes each week, delivery of inventory, management of outgoing displayed inventory.</li>
                </ul>
            </WorkSection>
            <WorkSection>
                <WorkName>Barista - Java Nation</WorkName>
                <TimeFrame>2015</TimeFrame>
                <ul>
                    <li>Preparing and serving coffee and other beverages to customers.</li>
                    <li>Operating various types of coffee-making equipment and machinery.</li>
                    <li>Maintaining a clean and organized workspace</li>
                </ul>
            </WorkSection>
            <WorkSection>
                <WorkName>Lifeguard - Chevy Chase Country Club</WorkName>
                <TimeFrame>2013</TimeFrame>
                <ul>
                    <li>Monitoring swimming areas to ensure the safety of all patrons.</li>
                    <li>Enforcing pool rules and regulations for the benefit of all guests.</li>
                    <li>Administering first aid and performing rescue operations as needed.</li>
                </ul>
            </WorkSection>
        </WorkContainer>
    </>
  )
}

export default Work