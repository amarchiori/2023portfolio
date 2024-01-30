import { CertContainer, CertItem } from "./certs-styles";
import SFCertAssociate from '../../assets/SF-Certified_Associate_500x490px.png'
import ExcelCert from '../../assets/ZTMExcelCert.png';
import WebCert from '../../assets/ZTMWebCert.png'


function Certs () {

    const images = [
        { src: [WebCert], alt: 'Web Development Cert' },
        { src: [SFCertAssociate], alt: 'Salesforce Certified Associate' },
        { src: [ExcelCert], alt: 'Excel Cert' },
      ];

    return (
        <CertContainer>
            {images.map((image, index) => (
                <CertItem
                key={index}
                src={image.src}
                alt={image.alt}
                />
            ))}
        </CertContainer>
    )
}

export default Certs;