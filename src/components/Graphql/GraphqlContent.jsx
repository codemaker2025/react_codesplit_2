import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function GraphqlContent({data}) {
  console.log(data,"test");
  
  return (
    <div>
      {data?.contactUsPage?.right_side_content?.map((content) => {
    switch (content.type) {
      case "store": {
        return (
          <Card key={content.id} className="mb-4">
            <Card.Body>
              <h3>{content.name}</h3>
              <p>
                {content.street}
                <br />
                {content.city}
              </p>
              {content.phone && (
                <p>
                  <FaWhatsapp className="me-2" size={20} />
                  <a
                    href={`tel:${content.phone}`}
                    className="text-dark text-decoration-none"
                  >
                    {content.phone}
                  </a>
                </p>
              )}
              {content.email && (
                <p>
                  <FaEnvelope className="me-2" size={20} />
                  <a
                    href={`mailto:${content.email}`}
                    className="text-dark text-decoration-none"
                  >
                    {content.email}
                  </a>
                </p>
              )}
              {content.link && (
                <Button
                  variant="link"
                  className="text-dark p-0"
                  href={content.link}
                >
                  {content.link_label || "View Details"}
                </Button>
              )}
            </Card.Body>
          </Card>
        );
      }

      case "social_media": {
        return (
          <Card key={content.id} className="mb-4">
            <Card.Body>
              <h3>{content.name}</h3>
              {content.socialLinks &&
                content.socialLinks.length > 0 && (
                  <div className="d-flex">
                    {content.socialLinks.map((link) => (
                      <a
                        key={link.id}
                        href={link.link}
                        className="me-2"
                        dangerouslySetInnerHTML={{
                          __html: link.svg_text,
                        }}
                        title={link.title}
                      />
                    ))}
                  </div>
                )}
            </Card.Body>
          </Card>
        );
      }

      default: {
        return (
          <Card key={content.id} className="mb-4">
            <Card.Body>
              <h3>{content.name}</h3>
              <p>
                {content.street}
                <br />
                {content.city}
              </p>
              {content.link && (
                <Button
                  variant="link"
                  className="text-dark p-0"
                  href={content.link}
                >
                  {content.link_label || "View Details"}
                </Button>
              )}
            </Card.Body>
          </Card>
        );
      }
    }
  })}
    </div>
  )
}
