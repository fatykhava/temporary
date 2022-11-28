import './style.scss';

interface MemberProps {
  avatar: string;
  avatarSrcset?: string;
  name: string;
  position: string;
}

const TeamMember: React.FC<MemberProps> = ({
  avatar,
  avatarSrcset,
  name,
  position,
}) => {
  return (
    <div className="member">
      <img
        src={avatar}
        srcSet={`${avatarSrcset} 2x`}
        alt={name}
        className="member__avatar"
      />
      <h4 className="h-4 member__name">{name}</h4>
      <p className="member__position">{position}</p>
    </div>
  );
};

export default TeamMember;
