"use client";

import {
  StarBackground,
  EclipseLogoTextOrbGlow,
  Button,
  DatePicker,
  ThemeProvider,
  useToast,
  Toaster,
  FileInput,
  Input,
  RadioGroup,
  RadioGroupItem,
  ObjectTable,
  Checkbox,
  Label,
} from "../lib/components";
import "./index.css";

export default function Home() {
  const { toast } = useToast();

  const objects = [
    { id: 1, name: "Object 1", description: "Description 1" },
    { id: 2, name: "Object 2", description: "Description 2" },
    { id: 3, name: "Object 3", description: "Description 3" },
    { id: 4, name: "Object 4", description: "Description 4" },
    { id: 5, name: "Object 5", description: "Description 5" },
  ];

  return (
    <>
      <StarBackground className="-z-10 fixed" />

      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <main className="flex flex-col justify-center items-center space-y-12 p-24">
          <EclipseLogoTextOrbGlow />

          <div className="items-top flex space-x-2">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
              <p className="text-sm text-muted-foreground">
                You agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>

          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Compact</Label>
            </div>
          </RadioGroup>

          <Button
            variant={"outline"}
            onClick={() =>
              toast({
                title: "Hello, World!",
                description: "This is a notification",
              })
            }
          >
            Show Notification
          </Button>

          <DatePicker />

          <FileInput />
          <Input label="Email" />

          <Button variant={"outline"}>Register for launch</Button>

          <ObjectTable
            data={objects}
            columns={["name", "description"]}
            columnTitles={["Name", "Description", "Object #"]}
            rowClassName="hover:bg-gray-800 transition-colors duration-200 ease-out cursor-pointer"
            computedColumns={[
              (object) => {
                return (
                  <>
                    <span className="font-bold text-red-300">
                      {object.name.split(" ")[1]}
                    </span>
                  </>
                );
              },
            ]}
            onRowClick={(object) => {
              console.log(object);
            }}
          />
        </main>
      </ThemeProvider>

      <Toaster />
    </>
  );
}
