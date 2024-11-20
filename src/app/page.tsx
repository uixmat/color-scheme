import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid grid-cols-4 items-center min-h-screen p-8 pb-20 gap-4 font-[family-name:var(--font-geist-sans)] max-w-screen-xl mx-auto">
      <div className="normal">
        <Card>
          <CardHeader>
            <CardTitle>Hello</CardTitle>
          </CardHeader>
          <CardContent>Lorem ipsum</CardContent>
          <CardFooter>Some footer stuff</CardFooter>
        </Card>
      </div>
      <div className="normal">
        <Card data-theme="normal" className="normal-card">
          <CardHeader>
            <CardTitle>Hello</CardTitle>
          </CardHeader>
          <CardContent>Lorem ipsum</CardContent>
          <CardFooter>Some footer stuff</CardFooter>
        </Card>
      </div>
      <div className="normal">
        <Card>
          <CardHeader>
            <CardTitle>Hello</CardTitle>
          </CardHeader>
          <CardContent>Lorem ipsum</CardContent>
          <CardFooter>Some footer stuff</CardFooter>
        </Card>
      </div>
      <div className="normal">
        <Card>
          <CardHeader>
            <CardTitle>Hello</CardTitle>
          </CardHeader>
          <CardContent>Lorem ipsum</CardContent>
          <CardFooter>Some footer stuff</CardFooter>
        </Card>
      </div>
    </div>
  );
}
