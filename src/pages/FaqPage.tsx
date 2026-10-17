import { useFaqs } from "../api/hooks";

function FaqPage() {
  const { data: faqs = [], isLoading, isError } = useFaqs();

  if (isLoading) return <p>Loading questions...</p>;
  if (isError) return <p>Could not load questions.</p>;

  return (
    <section>
      <h1>Frequently asked questions</h1>
      {faqs.map((faq) => (
        <details key={faq.id}>
          <summary>{faq.q}</summary>
          <p>{faq.a}</p>
        </details>
      ))}
    </section>
  );
}

export default FaqPage;
