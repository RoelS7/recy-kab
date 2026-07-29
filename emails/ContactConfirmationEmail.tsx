import * as React from 'react';
import { 
  Html, 
  Head, 
  Body,
  Preview, 
  Container, 
  Section, 
  Text, 
  Button, 
  Img 
} from '@react-email/components';

interface ContactConfirmationEmailProps {
  name: string;
}

export function ContactConfirmationEmail({ name }: ContactConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Bedankt voor uw aanvraag - Recy-Kab</Preview>
      <Body style={{ backgroundColor: '#f3f4f6', margin: 0, padding: '20px 0', fontFamily: 'Arial, sans-serif' }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
          
          {/* Header met Logo */}
          <Section style={{ backgroundColor: '#008d00', padding: '30px', textAlign: 'center' }}>
            <Img 
              src="https://www.recy-kab.com/images/logo.png" 
              width="220" 
              height="80" 
              alt="Recy-Kab" 
              style={{ 
                margin: '0 auto', 
                display: 'block', 
                width: '220px', 
                height: '80px', 
                border: '0', 
                outline: 'none', 
                textDecoration: 'none' 
              }}
            />
          </Section>

          {/* Inhoud */}
          <Section style={{ padding: '40px 30px' }}>
            <Text style={{ fontSize: '26px', fontWeight: 'bold', color: '#008d00', textAlign: 'center', margin: '0 0 15px 0' }}>
              Bedankt, {name}!
            </Text>

            <Text style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151', textAlign: 'center', margin: '0 0 25px 0' }}>
              We hebben uw offerteaanvraag goed ontvangen.<br />
              Ons team bekijkt deze zo snel mogelijk en neemt persoonlijk contact met u op.
            </Text>

            <Section style={{ textAlign: 'center', margin: '30px 0' }}>
              <Button 
                href="https://www.recy-kab.com"
                style={{ 
                  backgroundColor: '#008d00', 
                  color: '#ffffff', 
                  padding: '14px 28px', 
                  borderRadius: '6px', 
                  fontSize: '16px', 
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  display: 'inline-block',
                  textAlign: 'center'
                }}
              >
                Terug naar website
              </Button>
            </Section>

            <Text style={{ color: '#6b7280', textAlign: 'center', fontSize: '15px', margin: '20px 0 0 0' }}>
              Met vriendelijke groeten,<br />
              <strong>Het Recy-Kab team</strong>
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}