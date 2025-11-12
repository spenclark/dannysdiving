import Header from '../Header';

export default function HeaderExample() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 p-8">
        <p className="text-muted-foreground">Scroll down to see the header behavior change</p>
        <div className="h-[200vh]" />
      </div>
    </div>
  );
}
