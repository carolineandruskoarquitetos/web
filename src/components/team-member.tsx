import Image from "next/image";

interface TeamMemberProps {
  name: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="group">
      {imageUrl && (
        <div className="overflow-hidden mb-6 relative border-b border-black">
          <Image
            src={imageUrl}
            alt={name}
            width={256}
            height={400}
            className="object-cover object-center"
          />
        </div>
      )}
      <h3 className="text-xl font-medium text-stone-950 mb-1">{name}</h3>
      <p className="text-sm text-stone-500 uppercase tracking-wider mb-2">
        {title}
      </p>
      <p className="text-neutral-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default TeamMember;
