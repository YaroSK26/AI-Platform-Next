import Image from "next/image";

interface EmptyProps {
  label: string;
}

const Empty = ({ label }: EmptyProps) => {
  return (
    <div>
      <div className="w-hull p-20 flex flex-col items-center justify-center">
        <div className="relative h-72 w-72">
          <Image alt="Empty" fill src="/empty.png" />
        </div>
        <p className="text-muted-foreground text-sm text-center">{label}</p>
      </div>
    </div>
  );
};

export default Empty;
