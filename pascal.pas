program SaisieNote;

const
  NbMaxEle = 100;
  NbMaxMat = 10;

var
  Notes: array[1..NbMaxEle, 1..NbMaxMat] of integer;
  NbEle, NbMat: integer;
  i, j: integer;

begin
  writeln('Entrez le nombre de matieres :');
  repeat
    readln(NbMat);
  until (NbMat > 0) and (NbMat <= NbMaxMat);

  writeln('Entrez le nombre d''eleves :');
  repeat
    readln(NbEle);
  until (NbEle > 0) and (NbEle <= NbMaxEle);

  for i := 1 to NbEle do
  begin
    for j := 1 to NbMat do
    begin
      writeln('Note de l''eleve ', i, ' en matiere ', j, ' : ');
      readln(Notes[i][j]);
    end;
  end;
end.
