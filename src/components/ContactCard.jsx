import { Card, Button } from "react-bootstrap";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactCard({ content }) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <h3>{content.name}</h3>
        {content.street && <p>{content.street}<br />{content.city}</p>}

        {content.phone && (
          <p>
            <FaWhatsapp className="me-2" size={20} />
            <a href={`tel:${content.phone}`} className="text-dark text-decoration-none">{content.phone}</a>
          </p>
        )}

        {content.email && (
          <p>
            <FaEnvelope className="me-2" size={20} />
            <a href={`mailto:${content.email}`} className="text-dark text-decoration-none">{content.email}</a>
          </p>
        )}

        {content.link && (
          <Button variant="link" className="text-dark p-0" href={content.link}>
            {content.link_label || "View Details"}
          </Button>
        )}

        {content.socialLinks && content.socialLinks.length > 0 && (
          <div className="d-flex">
            {content.socialLinks.map((link) => (
              <a key={link.id} href={link.link} className="me-2" dangerouslySetInnerHTML={{ __html: link.svg_text }} title={link.title} />
            ))}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
