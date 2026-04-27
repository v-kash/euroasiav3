export default function AdminServicesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary-navy mb-8">Services</h1>
      
      <div className="bg-white rounded-xl shadow-sm p-8 text-center">
        <p className="text-text-muted mb-4">
          Service content is managed through the code. Contact the development team to make changes to service pages.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {[
            'Business Certifications',
            'Compliance & Legal',
            'Tender Assistance',
            'Digital Marketing',
            'Tax Exemption',
            'Business Advisory',
          ].map((service) => (
            <div key={service} className="bg-light-bg rounded-lg p-4 text-left">
              <h3 className="font-semibold text-primary-navy">{service}</h3>
              <p className="text-sm text-text-muted mt-1">Static content page</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
